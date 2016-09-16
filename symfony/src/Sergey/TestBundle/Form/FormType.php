<?php

# src/Sergey/TestBundle/Form/FormType.php

namespace Sergey\TestBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

use Sergey\TestBundle\Entity\Task;



class FormType extends AbstractType
{
        /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('f1')
            ->add('type', 'choice', [
                'choices'  => Task::getTypes(),

            ])

            ->add('f2')
            ->add('res')
        ;
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Sergey\TestBundle\Entity\task'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'sergey_test_task';
    }
}
