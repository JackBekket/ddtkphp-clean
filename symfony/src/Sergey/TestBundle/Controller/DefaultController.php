<?php

namespace Sergey\TestBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sergey\TestBundle\Entity\Task;

use Sergey\TestBundle\Form\FormType;

use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('SergeyTestBundle:Default:index.html.twig');
    }

    public function newAction()
       {
           $entity = new Task();
           $entity->setType('*');
           $form = $this->createForm(new FormType(), $entity, [
               'action' => $this->generateUrl('sergey_test_f'),
               'method' => 'POST',
           ]);

           return $this->render('SergeyTestBundle:Default:new.html.twig', array(
               'entity' => $entity,
               'form'   => $form->createView(),
           ));
       }

    public function createAction()
    {
       $entity=new Task();
       $form = $this->createForm(new FormType(), $entity);
       $form->handleRequest($request);

    if ($form->isValid()) {
    //    $em = $this->getDoctrine()->getManager();
    //    $em->persist($entity);
    //    $em->flush();

        return $this->redirect($this->generateUrl('sergey_test_f', array(
      //      'company' => $entity->getCompanySlug(),
      //      'location' => $entity->getLocationSlug(),
      //      'id' => $entity->getId(),
      //      'position' => $entity->getPositionSlug()
             'f1' => $entity->getF1(),
             'opr' =>$entity->getTypes(),
             'f2' => $entity->getF2(),
             'res' => $entity->getRes()
        )));
    }

    return $this->render('SergeyTestBundle:Default:new.html.twig', array(
        'entity' => $entity,
        'form'   => $form->createView(),
    ));


    }




}
