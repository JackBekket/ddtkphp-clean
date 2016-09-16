<?php

namespace Sergey\TaskBundle\Controller;

 // namespace Sergey\TaskBundle\Entity;



use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sergey\TaskBundle\Entity\Task;

use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('SergeyTaskBundle:Default:index.html.twig');
    }

public function newAction(Request $request)
  {
      $task= new Task();
  //    $task->setTask("*");
  //    $task->setF1(2);
//  $f1->2;
  //    $task->setF2(5);

      $form = $this->createFormBuilder($task)
      ->add('f1', 'number')
      ->add('task', 'choice')
      ->add('f2', 'number')
      ->add('res','text')
      ->getForm();

      if($request->getMethod()== 'POST'){
        $form->bindRequest($request);
        return new Response('<html><body>Whoa!</body></html>');

      }

      return $this->render('SergeyTaskBundle:Default:new.html.twig', array('form' => $form->createView(),
    ));

  }
}
